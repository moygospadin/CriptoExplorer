import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import LoadingFooter from './LoadingFooter';
const a = {waitForInteraction: true, viewAreaCoveragePercentThreshold: 95};
function CryptoFlatlist({
  renderComponent,
  onEndReachedFunc,
  data,
  start,
  isLoading,
}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={start} />
        }
        onEndReached={() => onEndReachedFunc()}
        data={data}
        onEndReachedThreshold={0.01}
        contentContainerStyle={{marginTop: 10, paddingBottom: 10}}
        renderItem={({item}) => renderComponent(item)}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <LoadingFooter isLoading={isLoading} />}
      />
    </View>
  );
}
export default CryptoFlatlist;
