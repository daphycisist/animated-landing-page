import { HTMLAttributes, ReactElement } from 'react';

export interface IPriceCards extends IPriceCardss {
  icon: ReactElement;
}

export interface IPriceCardss extends HTMLAttributes<HTMLElement> {
  name: string;
  abbr: string;
  amount: string;
  change: string;
}
