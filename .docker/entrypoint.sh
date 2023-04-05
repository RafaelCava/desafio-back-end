#!/bin/bash

yarn install

yarn husky install

yarn env

sleep 10

yarn prisma migrate dev

yarn debug