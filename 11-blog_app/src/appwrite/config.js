import { Client, Databases, ID, Query } from "appwrite";
import config from "../config";

export class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error("Appwrite service :: getPost()", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appWriteUrl,
        config.appWriteProjectId,
        queries
      );
    } catch (error) {
      throw new Error("Appwrite service :: getPosts()", error);
    }
  }

  async createPost({ slug, title, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      throw new Error("Appwrite service :: createPost()", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.database.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      throw new Error("Appwrite service :: updatePost()", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw new Error("Appwrite service :: deletePost()", error);
    }
  }

  // storage service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw new Error("Appwrite service :: uploadFile()", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appWriteBucketId, fileId);
    } catch (error) {
      throw new Error("Appwrite service :: deleteFile()", error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config(config.appWriteBucketId, fileId))
      .href;
  }
}

const service = new Service();
export default service;
