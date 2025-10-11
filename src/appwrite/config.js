import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  tablesDB;
  bucket;
  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
    this.tablesDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("error occured while creating post: ", error);
      return null;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDB.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.log("error occured while updating post: ", error);
      return null;
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.log("error occured while deleting post: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
      });
    } catch (error) {
      console.log("error occured while fetching all posts: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tablesDB.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        queries: queries,
      });
    } catch (error) {
      console.log("error occured while fetching all active posts: ", error);
      return false;
    }
  }

  //creating file upload service below
  
  async uploadFile(file){
    try {
        return await this.bucket.createFile({
            bucketId: conf.appwriteBucketId,
            fileId: ID.unique(),
            file: file,
        })
    } catch (error) {
        console.log("error occured while uploading file: ", error);
            return false;
    }
  }

  async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        })
    } catch (error) {
        console.log("an error occured while deleting file: ", error);
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
    }).href;
  }
}

const service = new Service();
export default service;
