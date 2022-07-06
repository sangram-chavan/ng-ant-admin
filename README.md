# ng-ant-admin
[![CodeFactor](https://www.codefactor.io/repository/github/ng-ant-admin/badge)](https://www.codefactor.io/repository/github/ng-ant-admin)


# Project video introduction
Ng-Ant-Admin 3.0 released (in fact, the real interface of the server is added)<br>
The account is admin1 or admin2, the password is a123456, please do not operate the authority of the account as admin, it is convenient for others to use, thank you<br>
The default login timeout time is 1h, upload, download, websocket, and system management modules are all displayed by real interface calls. (Self-paid server, less traffic, just try it). <br>
Completed the most commonly used permission control, personnel account management, role management, menu management, login timeout, etc. Lots of business examples added out of the box. <br>

If you encounter problems using this project, you can join the 376065816 qq group number to communicate with me. <br>
If this project is useful to you, please give me a star, thank you<br>
if help you, if you want ,please give me a star ,thank you<br>
Detailed explanation of the use of fast two-open [detailed explanation of the use of fast two-open](https://www.bilibili.com/video/BV1gF411x7rN/)<br>
Project Construction Simple Tutorial [Project Construction Simple Tutorial](https://www.bilibili.com/video/BV1EM4y1w7zd/)<br>
online demo address [demo](http://1.117.181.242/)<br>
Pure version project address [pure](https://gitee.com/hjxiaoqianduan/ng-ant-admin-pure/)<br>
pure project address [pure](https://gitee.com/hjxiaoqianduan/ng-ant-admin-pure/)<br>
Server source address [serviceApi](https://github.com/huajian123/ng-ant-admin-api)<br>
serviceApi address [serviceApi](https://github.com/huajian123/ng-ant-admin-api)<br>

# route key
The key needs to be set to the string after the last '/' of the routing address, and it must be unique
```typescript
const routes: Routes = [
  {path: '', data: {key: 'login', shouldDetach: 'no'}, component: LoginFormComponent}
];
````
# Grid system monitor
```angular2html
enum EquipmentWidth {
  xs, // (max-width: 575.98px)
  sm, // (min-width: 576px) and (max-width: 767.98px)
  md, // (min-width: 768px) and (max-width: 991.98px)
  lg, // (min-width: 992px) and (max-width: 1199.98px)
  xl, // (min-width: 1200px) and (max-width: 1599.98px)
  xxl // (min-width: 1600px)
}
````
How to use
````
  constructor(private windowsWidthService: WindowsWidthService) {
  }
  
  this.windowsWidthService.getWindowWidthStore().pipe(takeUntil(this.destory$)).subscribe(res => {
    this.currentEquipmentWidth = res;
    this.cdr.markForCheck();
  })
````


# Modules do not need to be preloaded

```typescript
export const routes: Routes = [
  {
    path: 'contact',
    loadChildren: import(() => './contact/contact.module').then(m => m.ContactModule),
    data: {
      preload: false
    }
  }
];
````


# Modules do not need to save state

```typescript
const routes: Routes = [
  {path: '', data: {key: 'login', shouldDetach: 'no'}, component: LoginFormComponent}
];
````

# There are similar details pages in the module that need to be jumped, and the parameters must be set as follows
The two associated routes are stored in the relatedLink array, and the value is the string at the end/after the address of each route.
```typescript
const routes: Routes = [
  {path: 'set-role', component: SetRoleComponent, data: {title: 'role management', key: 'set-role', relatedLink: ['role', 'set-role']}},
  {path: '', component: RoleManageComponent, data: {title: 'role management', key: 'role', relatedLink: ['role', 'set-role']}},
];

````

# Open a new tab page in the module to display the details, the parameters must be set as follows
set newTab in data
```typescript
const routes: Routes = [
  {path: '', component: TabsComponent, data: {title: 'tab operation', key: 'tabs'}},
  {path: 'example-detail', component: DetailComponent, data: {newTab:'true', title: 'demo details', key: 'example-detail'}}
];
````

# Cache the scroll bar of the specified container in the page
Set scrollContain as element selector in data
```typescript
  {path: '', component: KeepScrollPageComponent, data: {title: 'cache scrollbar', key: 'keep-scroll-page',scrollContain:['#div-scroll1','#div-scroll2']}}

````

# The temporary declaration cycle for switching tab calls is as follows
The two associated routes are stored in the relatedLink array, and the value is the string at the end/after the address of each route.
```typescript
_onReuseInit: () => void;
_onReuseDestroy: () => void;

````
This can be achieved by directly writing a method named _onReuseInit or _onReuseDestroy in the target component

# I am seeking full-time or part-time online or taking orders
Coordinates in Nanjing, I hope to do Angular, java, flutter, go, applet, vue
Please contact 287643967@qq.com

## System screenshot
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/11.jpg)

## Donate
If this project is useful to you, it just so happens that if you want to buy me a cup of coffee, please scan the code below, haha<br>
If this project is useful to you, and you happen to want to invite me for a cup of coffee, please scan Alipay or WeChat<br>
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/weixin.jpeg)
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/zhifubao.jpeg)



### License

MIT
