 // News.js dosyası içindeki    const listHeader'a ekleme yapılmıştır
 const listHeader = () => {
    return (
      <>
        <Text style={{fontWeight: 'bold', fontSize: 50, margin: 10}}>News</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {banner_data.map((banner_item) => {
            return (
              <ImageBackground
                source={{uri: banner_item.imageUrl}}
                imageStyle={{borderRadius: 8}}
                style={{
                  width: Dimensions.get('window').width * 0.9,
                  height: Dimensions.get('window').height / 4,
                  margin: 5,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      borderBottomLeftRadius:8,
                      borderBottomRightRadius:8,
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      paddingLeft: 10,
                      backgroundColor: 'rgba(105,105,105, 0.5)',
                      width: Dimensions.get('window').width * 0.9,
                      height: Dimensions.get('window').height * 0.05,
                    }}>
                    {banner_item.text}
                  </Text>
                </View>
              </ImageBackground>
            );
          })}
        </ScrollView>
      </>
    );
  };


//Can Curios Coders Solution