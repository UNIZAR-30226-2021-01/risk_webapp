#!/usr/bin/env sh

######################################################################
# @author      : Óscar Pueyo Ciutad (780378@unizar.es / oscar@graus.biz)
# @file        : genDoc
# @created     : Saturday Mar 20, 2021 00:43:55 CET
#
# @description :
######################################################################


npx styleguidist build
jsdoc -c jsdoc.config.json


