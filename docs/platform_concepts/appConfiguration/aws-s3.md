---
title : AWS-S3
sidebar_label : AWS-S3
---


## Scope of Integration

Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with the yellow.ai platform. Using this integration, one can get remote files, create a bucket, delete Bucket, upload files to Bucket, getSignedUrl for a file and delete a file from bucket.

# Use-cases 

Following are the use-cases which are currently accommodated in the Integration:


### 1. **Upload File**:- 
  From this method you can easily upload files to a bucket.

_ Node Input Params:-_                        



|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|fileCdnUrl*|https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png|Data source for data to copy to the remote server.|
|remoteFilePath*|/uploads/directoryPath/demo.png|Path to the Bucket to be created on the Bucket with file name.|
|bucketName*|your_bucket_name|The name of the bucket where upload the file|


### 2. **List Objects**:- 
Returns some or all (up to 1,000) of the objects in a bucket

_ Node Input Params:-_                        

|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|bucketName*|Your_Bucket_Name|The name of the bucket containing the objects.|



### 3. **Delete File**:- 
deletes an object from an S3 bucket

_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteDirPath*|/folder/demo.ong|Key name of the object to delete.|
|bucketName|Your_Bucket_Name|The bucket name of the bucket containing the object.|


### 4. **Bucket Lists**:- 
Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the s3:ListAllMyBuckets permission.


### 5. **Get Object**:- 
Retrieves objects from Amazon S3. To use GET, you must have READ access to the object.

_ Node Input Params:-_                        

|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remotefilePath*|photos/2006/February/sample.jpg|To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation|
|bucketName*|Your_Bucket_Name|The bucket name of the bucket containing the object.|



### 6. **Create Bucket**:- 
Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid AWS Access Key ID to authenticate requests
_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|bucketName*|Your_Bucket_Name|The bucket name of the bucket where you will store the objects.|





### 7. **Get Signed URL**:- 
Get a pre-signed URL for a given file.

_Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteFilePath*||remote directory path|
|bucketName|Your_Bucket_Name|The bucket name of the bucket containing the object.|
|expire|60|Expire time of url in seconds.|
#### Note: If you open the signed Url in browser, then It will take extra 40-60 sec to given expiry time due to browser's cache mechanism.



# Configuration

Configuring the integration with AWS-S3 is straightforward. Follow the steps defined below to start integrating:

**To integrate AWS-S3 with your bot on the platform:**

1. AWS Account and Access Keys
   * Open the IAM console at https://console.aws.amazon.com/iam/.
   * On the navigation menu, choose Users
   * Choose your IAM user name (not the check box).
   * Open the Security credentials tab, and then choose Create access key.
   * To see the new access key, choose Show.  and Copy the Access Key Id and Secret Access Key.
   * Go to IAM -> User -> click on your user -> Add Permission -> Add AmazonS3FullAccess Policy.

2. Go to Integration section
3. In Integration click on the connect for the AWS-S3.
4. Enter Access Key Id and Secret Access Key.
![alt_text](https://cdn.yellowmessenger.com/bBy2uI0OMplv1661313612403.png "image_tooltip")

5. Click on Save
6. Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.

7. Store AWS-S3 response in Object type variable in action-node.



Following the above steps will connect AWS-S3 with the yellow.ai platform.

# **References:-**


1. [https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)
2. [https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html)

