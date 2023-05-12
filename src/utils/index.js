import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import config from '@/config'

export const classnames = (...classes) => {
  return twMerge(clsx(...classes));
}

export const getImgUrl = (name) => {
  return config.imageUrl + name + '?tr:f-avif&t=1'
}

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, time);
  });
}

export const shortAddress = (address) => {
  return address ? `${address.substr(0, 5)}...${address.substr(-4)}` : '';
}


export const throttle = (fn, interval = 300) => {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, interval)
  }
}

export const debounce = (fn, interval = 300) => {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, interval)
  }
}
