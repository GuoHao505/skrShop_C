# git合并分支（一看就懂）


## 假如我们现在在dev分支上，刚开发完项目，执行了下列命令：

```csharp
git  add .
git  commit -m '提交的备注信息'
git  push -u origin dev-xxx
```

## 想将dev-xxx分支合并到dev分支，操作如下：

-   1、首先切换到dev分支上

```undefined
git  checkout dev
```

-   2、如果是多人开发的话 需要把远程dev上的代码pull下来

```cpp
git pull origin dev
//如果是自己一个开发就没有必要了，为了保险期间还是pull
```

-   3、然后我们把dev-xxx分支的代码合并到dev上

```undefined
git  merge dev-xxx
```

-   4、然后查看状态及执行提交命令

```csharp
git status

On branch master
Your branch is ahead of 'origin/master' by 12 commits.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean

//上面的意思就是你有12个commit，需要push到远程dev上 
> 最后执行下面提交命令
git push origin dev
```

-   5其他命令

```cpp
更新远程分支列表
git remote update origin --prune

查看所有分支
git branch -a

删除远程分支Chapater6
git push origin --delete Chapater6

删除本地分支 Chapater6
git branch -d  Chapater6
```

-   6回退版本（已经提交到了远程仓库）

```objectivec
查看代码提交记录，提交id
git log

回退到指定的id
git reset --hard 提交id

强推远程
git push -f
```
