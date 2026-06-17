import React, { useImperativeHandle, useLayoutEffect } from 'react';
import type { FlatListProps } from 'react-native';
import { FlatList, ActivityIndicator, StyleSheet, Text, RefreshControl, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export type FlashListRef = {
  onRefresh: () => void;
}
interface IListShowProps extends Omit<FlatListProps<any>, 'data'>{
    query1:any
    query2:any
    queryParams?:Record<string, any>
    selector?:(data:any) => any;
    ref?: React.Ref<FlashListRef>;
}


let page = 0;
let hasMore = true;
export default function FlashList(props: IListShowProps) {
  const { query1, query2, queryParams,selector, ref, ...extra} = props;
  const [refreshing, setRefreshing] = React.useState(false);
  const { data, isLoading, isFetching, refetch } = query1({...queryParams});
  const [get, res] = query2();
  const {t} =useTranslation()


  useLayoutEffect(()=>{
    hasMore = true;
  },[])

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      page = 0;
      await refetch();
      hasMore = true;
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  };

  useImperativeHandle(ref, () => ({
    onRefresh,
  }));

  const handleMore = async () => {
    try {
      if (!hasMore || isFetching || isLoading || res.isFetching || res.isLoading || !data?.data || (data?.data && data.data.length < (queryParams?.limit as number))) return;

      page += 1;
      get({
        ...queryParams,  
        offset: page * (queryParams?.limit as number)
      });

      if (res.data && !((res.data?.data?.length || 0) >= (queryParams?.limit as number))) {
        hasMore = false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={selector?selector(data):(data?.data || [])}
      onEndReached={handleMore}
      keyExtractor={(item, index) => `${item?.id}-${index}`}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.container}
      ListEmptyComponent={(isLoading || isFetching) ? <Loading /> : <Text style={styles.empty}>{t('common.no_information_found')}</Text>}
      ListFooterComponent={(res.isLoading || res.isFetching) ? <ActivityIndicator size="small" color="#000" /> : null}
      {...extra}
    />
  );
}

function Loading() {
  return (
    <View style={{ ...styles.container, ...styles.empty }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    padding: 12,
  },
  empty: {
    paddingTop: 20,
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});