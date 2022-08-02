const quiz=[
{
	q:'Which of the following is an AWS component which consumes resources from your VPC?',
    options:['Internet Gateway','Gateway VPC Endpoints','NAT Gateway','Elastic IP Addresses'],
	answer:2
},
{
	q:'You have successfully set up a VPC peering connection in your account between two VPCs – VPC A and VPC B, each in a different region. When you are trying to make a request from VPC A to VPC B, the request fails. Which of the following could be a reason?',
	options:['Cross-region peering is not supported in AWS','Routes not configured in route tables for peering connections.','VPC A security group default outbound rules not allowing traffic to VPC B IP range.'],
	answer:1
},
{
	q:'You host a static website in an S3 bucket and there are global clients from multiple regions. You want to use an AWS service to store cache for frequently accessed content so that the latency is reduced and the data transfer rate is increased. Which of the following options would you choose? ',
	options:['Configure CloudFront to deliver the content in the S3 bucket.','Create multiple Amazon S3 buckets and put Amazon EC2 and S3 in the same AWS Region.','Use AWS SDKs to horizontally scale parallel requests to the Amazon S3 service endpoints.'],
	answer:0
},
{
	q:'Your company has an online game application deployed in an Auto Scaling group. The traffic of the application is predictable. Every Friday, the traffic starts to increase, remains high on weekends and then drops on Monday. You need to plan the scaling actions for the Auto Scaling group. Which method is the most suitable for the scaling policy? ',
	options:['Configure a scheduled action in the Auto Scaling group by specifying the recurrence, start/end time, capacities, etc.','Select the ASG and on the Automatic Scaling tab, add a step scaling policy to automatically scale-out/in at fixed time every week.','Configure a scheduled CloudWatch event rule to launch/terminate instances at the specified time every week.','Create a predefined target tracking scaling policy based on the average CPU metric and the ASG will scale automatically.'],
	answer:0
},
{
	q:'You need to deploy a machine learning application in AWS EC2. The performance of inter-instance communication is very critical for the application and you want to attach a network device to the instance so that the performance can be greatly improved. Which option is the most appropriate to improve the performance? ',
	options:['Enable enhanced networking features in the EC2 instance.','Attach high-speed Elastic Network Interface (ENI) in the instance.','Configure Elastic Fabric Adapter (EFA) in the instance.','Create an Elastic File System (EFS) and mount the file system in the instance.'],
	answer:2
},
{
	q:'You have an S3 bucket that receives photos uploaded by customers. When an object is uploaded, an event notification is sent to an SQS queue with the object details. You also have an ECS cluster that gets messages from the queue to do the batch processing. The queue size may change greatly depending on the number of incoming messages and backend processing speed. Which metric would you use to scale up/down the ECS cluster capacity?',
	options:['Number of containers in the ECS cluster.','Number of objects in the S3 bucket.','The number of messages in the SQS queue.','Memory usage of the ECS cluster.'],
	answer:2
},
{
	q:'Organization XYZ is planning to build an online chat application for their enterprise level collaboration for their employees across the world. They are looking for a single digit latency fully managed database to store and retrieve conversations. What would AWS Database service you recommend?',
	options:['AWS RDS','AWS Redshift','AWS Aurora','AWS DynamoDB'],
	answer:3
},
{
	q:'When creating an AWS CloudFront distribution, which of the following is not an origin?',
	options:['AWS Lambda','AWS MediaPackage channel endpoint','AWS S3 bucket','Elastic Load Balancer'],
	answer:0
},
{
	q:'Which of the following is not a backup and restore solutions provided by AWS? ',
	options:['AWS Elastic Block Store','AWS Elastic Beanstalk','AWS Storage Gateway','AWS Database Migration Hub'],
	answer:1
},
{
	q:'Which of the following statements are true with respect to VPC?',
    options:['A route with target “local” on the route table can be edited to restrict traffic within VPC.','A subnet can have multiple route tables associated with it.','A network ACL can be associated with multiple subnets.'],
	answer:2
},
{
	q:' Which of the following is not a category in AWS Trusted Advisor service checks?',
	options:['Service Limits','Network Optimization','Fault Tolerance'],
	answer:1
},
{
	q:'How can an instance be copied to another region?',
	options:['There is no way to copy an instance to another region','By creating an AMI and copy it to another region','By stopping the instance and using the copy option','First instances root volume is detached. Then a new instance is created in another region. Finally, the detached volume can be attached to a new instance as a root device'],
	answer:1
},
{
	q:'Your company has moved a legacy application from the on-premise data center to the cloud. The legacy application requires a static IP address is coded into the application which prevents you from deploying the application with high availability and fault tolerance using the ELB. Which steps would you take to apply high availability and fault tolerance to this application?',
	options:['Write a custom script that pings the health of the instance and if the instance stops responding, switches the elastic IP address to a standby instance','Ensure that the instance its using has an elastic IP address assigned to it','Create an AMI of the instance and launch it using Auto Scaling which will deploy the instance again if it becomes unhealthy','Do not migrate the application to the cloud until it can be converted to work with the ELB and Auto Scaling'],
	answer:0
},
{
	q:'You are an AWS Solutions Architect. Your company has a successful web application deployed in an AWS Auto Scaling group. The application attracts more and more global customers. However, the application’s performance is impacted. Your manager asks you how to improve the performance and availability of the application. Which of the following AWS services would you recommend? ',
	options:['AWS Global Accelerator','Amazon DynamoDB Accelerator','AWS DataSync','AWS Lake Formation'],
	answer:0
},
{
	q:'You have an S3 bucket that receives photos uploaded by customers. When an object is uploaded, an event notification is sent to an SQS queue with the object details. You also have an ECS cluster that gets messages from the queue to do the batch processing. The queue size may change greatly depending on the number of incoming messages and backend processing speed. Which metric would you use to scale up/down the ECS cluster capacity?',
	options:['Number of containers in the ECS cluster.','Number of objects in the S3 bucket.','The number of messages in the SQS queue.','Memory usage of the ECS cluster.'],
	answer:2
}
]