#!/bin/bash

yarn install

yarn husky install

yarn env

yarn prisma migrate dev

yarn debug