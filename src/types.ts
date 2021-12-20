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

export interface IFeatureCard extends HTMLAttributes<HTMLElement> {
  icon: ReactElement;
  header: string;
  text: string;
}

export interface IStepCard extends HTMLAttributes<HTMLElement> {
  head: string;
  content: string;
  stepNum: any;
}
