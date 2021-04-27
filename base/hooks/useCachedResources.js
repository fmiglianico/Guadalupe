import React, { useEffect, useState } from 'react';

import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Images from '@asset/images';

export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {

      await Promise.all([
        Asset.loadAsync([
          // Load images
          Images.Background,
          Images.Guadalupe,
          Images.Cluster,
          Images.Wolfgang,
          Images.Lito,
          Images.Riley,
          Images.Will,
          Images.Sun,
          Images.Capheus,
          Images.Naomi,
          Images.Kala
        ]),
        Font.loadAsync({
          // Load icon fonts
          ...Ionicons.font,
          ...FontAwesome.font,
          ...MaterialIcons.font,
          ...MaterialCommunityIcons.font
        }),
      ]).catch((error) => {
        console.error(error);
      }).then(() => {
        setLoadingComplete(true);
      })
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
