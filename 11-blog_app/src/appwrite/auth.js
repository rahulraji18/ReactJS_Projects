import config from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      if (userAccount) return this.login({ email, password });
      else return userAccount;
    } catch (error) {
      throw new Error(error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      throw new Error("Appwrite service :: getCurrentUser() :: ", error);
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error("Appwrite service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
