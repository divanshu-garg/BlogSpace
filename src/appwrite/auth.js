import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });
      if (userAccount) {
        // login function runs here
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const loggedInUser = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      return loggedInUser;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error occured while getting current user:", error);
      return null; // not throwing error, so return to stop execution
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("error occured while logging out current user:", error);
      return null; // not throwing error, so return to stop execution
    }
  }
}

const authService = new AuthService();

export default authService;
