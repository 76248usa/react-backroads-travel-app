import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id:1, href: '#home', text: 'home'},
    {id:2, href: '#about', text: 'about'},
    {id:3, href: '#service', text: 'service'},
    {id:4, href: '#tours', text: 'tours'}
]

export const socialLinks = [
    {id:1, href: 'https://www.twitter.com', className: 'fab fa-facebook'},
    {id:1, href: 'https://www.twitter.com', className: 'fab fa-twitter'},
    {id:1, href: 'https://www.twitter.com', className: 'fab fa-squarespace'},
]

export const services = [
    {id:1, className: 'fas fa-wallet fa-fw', title: 'saving money'},
    {id:1, className: 'fas fa-tree fa-fw', title: 'endless hiking'},
    {id:1, className: 'fas fa-socks fa-fw', title: 'amazing comfort'}
]

export const tours = [
{id:1, src: tour1, date: 'august 26th, 2020', title: 'Tibet Adventure',
place: 'china', length: '6 days', cost: 'from $2100'},
{id:2, src: tour2, date: 'october 1th, 2020', title: 'best of java',
place: 'java', length: '7 days', cost: 'from $1100'},
{id:3, src: tour3, date: 'september 15th, 2020', title: 'explore hong kong',
place: 'hong kong', length: '4 days', cost: 'from $900'},
{id:4, src: tour4, date: 'december 5th, 2019', title: 'kenya highlights',
place: 'kenya', length: '11 days', cost: 'from $3000'}
]

