import {
  trigger,
  animate,
  transition,
  style,
  group,
  query
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition('*<=>*', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100vh', zIndex: 2 }), { optional: true }),
    group([
      query(':enter', [
        style({
          opacity: 0,
          transform: 'rotateX(180deg)'
        }),
        animate(
          '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
          style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
        )
      ], { optional: true }),

      query(':leave', [
        animate(
          '0.35s',
          style({ opacity: 0, transform: 'rotateX(180deg)' })
        )
      ], { optional: true })
    ])
  ])
])
