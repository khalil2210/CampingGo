export interface User {
  id:           number;
  firstName:    string;
  lastName:     string;
  username:     string;
  profileImage: ProfileImage;
}
export interface ProfileImage {
  id: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUser(json: string): User {
      return JSON.parse(json);
  }

  public static UserToJson(value: User): string {
      return JSON.stringify(value);
  }
}
