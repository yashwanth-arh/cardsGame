import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ab-cards',
  templateUrl: './ab-cards.component.html',
  styleUrls: ['./ab-cards.component.scss'],
})
export class ABCardsComponent implements OnInit {
  cards: any[] = [];
  shuffelCards: any = [];
  seconds: number = 10;

  // Define an array of suits and an array of ranks
  suits = ['heart_', 'diamond_', 'club_', 'spade_'];
  ranks = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
  ];

  // Define the colors for each suit
  colors: any = {
    hearts: 'red',
    diamonds: 'red',
    clubs: 'black',
    spades: 'black',
  };
  counter: number = 10;
  isEnable: boolean = false;
  shuffleArray: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.cardsObject();
    this.suffleCards();
  }

  onSelectCard(card: any, index: number) {
    this.isEnable = true;
    console.log(index);
    // const ele = document.getElementsByClassName(
    //   'front'
    // ) as HTMLCollectionOf<HTMLElement>;
    // ele[index].style.transform = 'rotate(180deg)';
    const ele1 = document.getElementsByClassName(
      'back'
    ) as HTMLCollectionOf<HTMLElement>;
    ele1[index].style.transform = 'rotate(0deg)';
  }
  // over(){
  //   const ele = document.getElementsByClassName('back')
  //   ele
  // }
  timmer() {
    const makeIteration = (): void => {
      console.clear();
      if (this.seconds > 0) {
        console.log(this.seconds);
        setTimeout(makeIteration, 1000); // 1 second waiting
      }
      this.seconds -= 1;
    };

    setTimeout(makeIteration, 1000); // 1 second waiting
  }
  cardsObject() {
    for (let suitIndex = 0; suitIndex < this.suits.length; suitIndex++) {
      for (let rankIndex = 0; rankIndex < this.ranks.length; rankIndex++) {
        const card = {
          suit: this.suits[suitIndex],
          rank: this.ranks[rankIndex],
          color: this.colors[this.suits[suitIndex]], // Get the color based on the suit
          image:
            '../../assets/cards/1x/' +
            this.suits[suitIndex] +
            this.ranks[rankIndex] +
            '.png', // image URL format
        };
        this.cards.push(card);
      }
    }
  }
  suffleCards() {
    this.cards.map((e, i) => {
      console.log(e, i);
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    });
  }
}
