import { Event } from './event';

export const TransportEvents: Event[] = [
      { id: 1, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy transportu dostają po 10$.' },
      { id: 2, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy transportu dostają po 20$.' },
      { id: 3, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy transportu otrzymują punkt wpływów.' },
      { id: 4, title: 'Jeśli transport się powiedzie', description: 'wszyscy uczestnicy transportu dostają agenta do ręki.' },
      { id: 5, title: 'Jeśli transport się powiedzie', description: 'osoba inicjująca wystawia agenta z ręki na planszę (o ile pozwalają jej wpływy).' },
      { id: 6, title: 'Jeśli transport się powiedzie', description: 'osoba inicjująca wystawia agenta z puli na planszę (o ile pozwalają jej wpływy).' },
      { id: 7, title: 'Jeśli transport się powiedzie', description: 'w losowym lokalu pojawia się 50$ - otrzymuje je gracz, który kontroluje lokal/przejmie kontrolę jako pierwszy.' },
      { id: 8, title: 'Jeśli transport się powiedzie', description: 'w losowym lokalu pojawia się ulepszenie (gracz kontrolujący lokal otrzymuje punkt wpływów).' },
      { id: 9, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta (dowolnego).' },
      { id: 10, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta z mapy na rękę.' },
      { id: 11, title: 'Jeśli transport się nie powiedzie', description: 'każdy uczestnik traci agenta z mapy do puli.' },
      { id: 12, title: 'Jeśli transport się nie powiedzie', description: 'zaraza w transporcie - wszyscy ochroniarze zostaja zabici - wracają do puli.' },
      { id: 13, title: 'Jeśli transport się nie powiedzie', description: 'nawrócenie - uczestnicy tracą jednego (wybranego z mapy) agenta na rzecz policji.' },
      { id: 14, title: 'Jeśli transport się nie powiedzie', description: 'wszyscy agenci ochrony transportu zamieniają się na patrole i zostają na drodze.' },
      { id: 15, title: 'Niezależnie od wyniku transportu', description: 'całość towaru zostaje zniszczona. Transport zakonczony niepowodzeniem (gracze tracą wpływy).' },
      { id: 16, title: 'Niezależnie od wyniku transportu', description: 'jedna beczka każdego uczestnika zostaje zniszczona bez względu na powodzenie transportu.' },
      { id: 17, title: 'Niezależnie od wyniku transportu', description: 'nalot na transport - zniszczenie alkoholu graczy, którzy nie umieścili agentów ochrony.' },
      { id: 18, title: 'Niezależnie od wyniku transportu', description: 'nic się nie dzieje' },
      { id: 19, title: 'Niezależnie od wyniku transportu', description: 'nic się nie dzieje' },
      { id: 20, title: 'Niezależnie od wyniku transportu', description: 'nic się nie dzieje' },
    ];
