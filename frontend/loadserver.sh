#!/bin/bash
sudo docker stop gui
sudo docker rm gui

sudo docker build -t gui .
sudo docker run -it --net db_subnet --ip 172.16.1.4 --name gui -d gui
