#### Install Robo3t On Ubuntu 18.04

###### Download the package form [Robo3t](https://robomongo.org/download "https://robomongo.org/download") or using `wget`

```
wget https://download.robomongo.org/1.2.1/linux/robo3t-1.2.1-linux-x86_64-3e50a65.tar.gz
```

###### Extract here using 
`tar -xvzf robo3t-1.2.1-linux-x86_64-3e50a65.tar.gz`

###### Make a new floder in `usr/local/bin` from the package
`sudo mkdir /usr/local/bin/robo3t`

###### Move the extracted package to `usr/local/bin`
`sudo mv  robo3t-1.2.1-linux-x86_64-3e50a65/* /usr/local/bin/robo3t`

###### Change directory to `cd /usr/local/bin/robo3t/bin`

###### Now, We need to give permission to newly created directory using `chmod`
`sudo chmod +x robo3t ./robo3t`

Now we can run Robo3t
`./robo3t`

###### We can download the [icon](https://www.google.com/search?q=robo3t+icon+png&tbm=isch&source=iu&ictx=1&fir=Lh5FTCRLPKZyvM%253A%252CT0TupOjHzw6HKM%252C_&usg=AI4_-kRUiahKne4RFzDIMMulD1ZHJZNzAA&sa=X&ved=2ahUKEwiXtenUqbjgAhUBUhUIHfvEACQQ9QEwAHoECAUQBA#imgrc=Lh5FTCRLPKZyvM: "https://www.google.com/search?q=robo3t+icon+png&tbm=isch&source=iu&ictx=1&fir=Lh5FTCRLPKZyvM%253A%252CT0TupOjHzw6HKM%252C_&usg=AI4_-kRUiahKne4RFzDIMMulD1ZHJZNzAA&sa=X&ved=2ahUKEwiXtenUqbjgAhUBUhUIHfvEACQQ9QEwAHoECAUQBA#imgrc=Lh5FTCRLPKZyvM:") for Robo3t from and put it here as we will need to make desktop icon later 

For example save it on `/bin` with name `icon.png` 
`/usr/local/bin/robo3t/bin/icon.png`

`mv icon.png /usr/local/bin/robo3t/bin`

###### To make `desktop icon` for `Robo3t`, we can make a file in `usr/share/applications`

`sudo nano /usr/share/applications/robo3t.desktop`
 
 Paste these there and save
```
[Desktop Entry]
Encoding=UTF-8
Type=Application
Name=Robo3t
Icon=/usr/local/bin/robo3t/bin/icon.png
Exec="/usr/local/bin/robo3t/bin/robo3t"
Comment=Robo3t 
Categories=Development;
Terminal=false
StartupNotify=true
```

Now, we can find the `icon` in application launcher menu by search for `robo3t`

We can check [this](https://gist.github.com/LogansUA/53d4a3a60bb3c2aeb031ed6a9e5d0ef4 "https://gist.github.com/LogansUA/53d4a3a60bb3c2aeb031ed6a9e5d0ef4") also 

[Reference](https://www.dotnetjalps.com/2018/03/install-robo3t-robmongo-ubuntu.html "https://www.dotnetjalps.com/2018/03/install-robo3t-robmongo-ubuntu.html")
