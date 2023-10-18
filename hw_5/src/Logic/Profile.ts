import { UserItem } from "../Data/UserItem";

export class Profile {
  private user: UserItem;

  public home(): void {
    // Code for the home page of the profile
  }

  public login(): void {
    // Code for user login
  }

  public logOut(): void {
    // Code for user logout
  }

  public changeProfile(): void {
    // Code for changing user profile details
  }

  public deleteProfile(): void {
    // Code for deleting user profile
  }
}

interface IStore {
  purchaseHistory(): void;
}
