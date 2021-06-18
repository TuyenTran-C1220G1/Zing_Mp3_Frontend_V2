// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig : {
    apiKey: 'AIzaSyCMAyDYrQkeD6h3_0clTdESzpPXV6e6MPo',
    authDomain: 'zingmp3-4bcaf.firebaseapp.com',
    databaseURL: 'https://zingmp3-4bcaf-default-rtdb.firebaseio.com',
    projectId: 'zingmp3-4bcaf',
    storageBucket: 'zingmp3-4bcaf.appspot.com',
    messagingSenderId: '299675955641',
    appId: '1:299675955641:web:3af8bec68dbae845b04668',
    measurementId: 'G-C2MVX75JWW'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
