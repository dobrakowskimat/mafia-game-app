import { Event } from './event';

export const TransportEvents: Event[] = [
      { id: 1, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy transportu dostają 10$' },
      { id: 2, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy  transportu dostają po 20$' },
      { id: 3, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy  transportu dostają agenta do ręki' },
      { id: 4, title: 'Jeśli transport się powiedzie', description: 'osoba inicjująca wystawia agenta z ręki na planszę (o ile pozwalają jej wpływy)' },
      { id: 5, title: 'Jeśli transport się powiedzie', description: 'osoba inicjująca wystawia agenta z puli na planszę (o ile pozwalają jej wpływy)' },
      { id: 6, title: 'Jeśli transport się powiedzie', description: 'w losowym lokalu pojawia się 50$ - zbiera je ten, który ma tam agenta' },
      { id: 7, title: 'Jeśli transport się powiedzie', description: 'w losowym lokalu pojawia się ulepszenie (właściciela lub tego, kto przejmie lokal)' },
      { id: 8, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta (dowolnego)' },
      { id: 9, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta z mapy na rękę' },
      { id: 10, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta z mapy do puli (agent umiera w męczarniach)' },
      { id: 11, title: 'Jeśli transport się nie powiedzie', description: 'zaraza w transporcie - wszyscy ochroniarze zostali zabici - wracają do puli' },
      { id: 12, title: 'Jeśli transport się nie powiedzie', description: 'nawrócenie - uczestnicy tracą jednego (wybranego z mapy) agenta na rzecz policji' },
      { id: 13, title: 'Jeśli transport się nie powiedzie', description: 'wszyscy agenci broniący zamieniają się na patrole i zostają na drodze' },
    ];
