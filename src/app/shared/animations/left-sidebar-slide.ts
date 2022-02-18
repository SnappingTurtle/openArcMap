import { trigger, state, style, transition, animate } from '@angular/animations';

export const leftSidebarSlide = trigger('leftSidebarSlide',
    [
        state("closed",
            style({left: '{{hideLeftWidth}}' + 'px',  width: '{{sidebarWidth}}' + 'px'}),
            { params: { sidebarWidth: '400', hideLeftWidth: '-200' }}),
        
        state('open',
            style({left: '{{openOffset}}' + 'px', width: '{{sidebarWidth}}' + 'px'}),
            { params: { openOffset: '0', sidebarWidth: '400' }}),

        transition('closed => open', [animate('250ms ease-in')]),
        transition('open => closed', animate('250ms ease-out'))
    ]
)