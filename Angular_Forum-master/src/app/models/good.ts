export interface RoomPicture {
  room: string;
  picture: string;
}

export class Good {
  id: number;
  address: string;
  price: number;
  goodPicture: string;
  roomPictures: RoomPicture[];

  isRenting: boolean;
  isSelling: boolean;

  comments: Comment[];

}
