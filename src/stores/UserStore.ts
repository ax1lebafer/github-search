import { UserType } from "../types/user.ts";
import { makeAutoObservable, runInAction } from "mobx";
import { fetchUsers } from "../api/github.ts";

class UserStore {
  users: UserType[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchSearchUsers(name: string) {
    this.isLoading = true;
    this.error = null;

    try {
      const data = await fetchUsers(name);

      runInAction(() => {
        this.users = data.items;
        this.isLoading = false;
      });
    } catch (error: unknown) {
      runInAction(() => {
        if (error instanceof Error) {
          this.error = error.message;
        } else {
          this.error = "Неизвестная ошибка";
        }
        this.isLoading = false;
      });
    }
  }
}

const userStore = new UserStore();
export default userStore;
