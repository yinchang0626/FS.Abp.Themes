$ErrorActionPreference = "Stop"

git subtree split -P angular/libs/themes -b angular/libs/themes
git subtree split -P angular/libs/account -b angular/libs/account
git subtree split -P angular/themes/dev -b angular/themes/dev
git subtree split -P angular/themes/ng-alain -b angular/themes/ng-alain
git subtree split -P angular/themes/ngx-admin -b angular/themes/ngx-admin


git push origin angular/libs/themes:angular/libs/themes
git push origin angular/libs/account:angular/libs/account
git push origin angular/themes/dev:angular/themes/dev
git push origin angular/themes/ng-alain:angular/themes/ng-alain
git push origin angular/themes/ngx-admin:angular/themes/ngx-admin
