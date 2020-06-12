import {
    animate,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const sidebarButtonStateTrigger: AnimationTriggerMetadata = trigger(
    'sidebarButtonState',
    [
        state(
            'opened',
            style({
                transform: 'rotate(0deg)'
            })
        ),
        state(
            'closed',
            style({
                transform: 'rotate(180deg)'
            })
        ),
        transition('opened => closed', [animate('300ms ease-out')]),
        transition('closed => opened', [animate('300ms ease-out')])
    ]
);

export const shownStateTrigger: AnimationTriggerMetadata = trigger(
    'shownState',
    [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate(
                '200ms ease-out',
                style({
                    opacity: 1
                })
            )
        ]),
        transition(':leave', [
            animate(
                '500ms ease-out',
                style({
                    opacity: 0
                })
            )
        ])
    ]
);
export const showHidePanel: AnimationTriggerMetadata = trigger(
  'showHidePanel', [
    state('shown', style({
        visibility: 'visible',
        'border-width': '.1rem',
        margin: '0.33rem',
        padding: '.5rem'
    })),
    state('hidden', style({
        visibility: 'hidden',
        'border-width': '0rem',
        padding: '0rem',
        margin: '0rem',
        height: '0px',
        overflow: 'hidden'
    })),
    transition('shown <=> hidden', [animate('150ms cubic-bezier(.1,.5,.5,.1)')])
  ]
);
export const slideshowAnimation = trigger(
  'slideInOut', [
  state('shown', style({
      display: 'flex',
      opacity: 1,
      left: 0
  })),
  state('hidden', style({
      display: 'none',
      opacity: 0,
      left: '50%'
  })),
  transition('shown => hidden', [animate('500ms ease-out')]),
  transition('hidden => shown', [animate('500ms ease-in')])
]
);
