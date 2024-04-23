import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { NextJsComponent } from './next-js/next-js.component';
import { NodeJsComponent } from './node-js/node-js.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { FlutterComponent } from './flutter/flutter.component';
import { JavaComponent } from './java/java.component';
import { ReactNativeComponent } from './react-native/react-native.component';
import { AndroidComponent } from './android/android.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    { path: 'react', component: ReactComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'next-js', component: NextJsComponent },
    { path: 'node-js', component: NodeJsComponent },
    { path: 'dot-net', component: DotNetComponent },
    { path: 'flutter', component: FlutterComponent },
    { path: 'java', component: JavaComponent },
    { path: 'react-native', component: ReactNativeComponent },
    { path: 'android', component: AndroidComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
