const quiz=[
{
	q:'You are a project owner and need your co-worker to deploy a new version of your application to App Engine. You want to follow Google’s recommended practices. Which IAM roles should you grant your co-worker?',
	options:['Project Editor','App Engine Service Admin','App Engine Deployer','App Engine Code Viewer'],
	answer:2
},
{
	q:'What are two different features that fully isolate groups of VM instances?',
	options:['Firewall rules and subnetworks','Networks and subnetworks','Subnetworks and projects','Projects and networks'],
	answer:3
},
{
	q:'Which database service requires that you configure a failover replica to make it highly available?',
	options:['Cloud Spanner','Cloud SQL','BigQuery','Cloud Datastore'],
	answer:1
},
{
	q:'Which of the following statements about encryption on GCP is not true?',
	options:['Google Cloud Platform encrypts customer data stored at rest by default.','Each encryption key is itself encrypted with a set of master keys.','If you want to manage your own encryption keys for data on Google Cloud Storage, the only option is Customer-Managed Encryption Keys (CMEK) using Cloud KMS.','Data in Google Cloud Platform is broken into subfile chunks for storage, and each chunk is encrypted at the storage level with an individual encryption key.'],
	answer:2
},
{
	q:'To set up a virtual private network between your office network and Google Cloud Platform and have the routes automatically updated when the network topology changes, what is the minimal number of each type of component you need to implement?',
	options:['2 Cloud VPN Gateways and 1 Peer Gateway','1 Cloud VPN Gateway, 1 Peer Gateway, and 1 Cloud Router','2 Peer Gateways and 1 Cloud Router','2 Cloud VPN Gateways and 1 Cloud Router'],
	answer:1
},
{
	q:'Which Google Cloud Platform service requires the least management because it takes care of the underlying infrastructure for you?',
	options:['Container Engine','Cloud Engine','App Engine','Docker containers running on Cloud Engine'],
	answer:2
},
{
	q:'Which statement about IP addresses is false?',
	options:['You are charged for a static external IP address for every hour it is in use.','You are not charged for ephemeral IP addresses.','Google Cloud Engine supports only IPv4 addresses, not IPv6.','You are charged for a static external IP address when it is assigned but unused.'],
	answer:0
},
{
	q:'Which database services support standard SQL queries?',
	options:['Cloud Bigtable and Cloud SQL','Cloud Spanner and Cloud SQL','Cloud SQL and Cloud Datastore','Cloud SQL'],
	answer:1
},
{
	q:'Which is the fastest instance storage option that will still be available when an instance is stopped?',
	options:['Local SSD','Standard Persistent Disk','SSD Persistent Disk','RAM disk'],
	answer:2
},
{
	q:'Which of the following is not a best practice for mitigating Denial of Service attacks on your Google Cloud infrastructure?',
	options:['Block SYN floods using Cloud Router','Isolate your internal traffic from the external world','Scale to absorb the attack','Reduce the attack surface for your GCE deployment'],
	answer:0
},
{
	q:'Which of the following would not reduce your recovery time in the event of a disaster?',
	options:['Make it as easy as possible to adjust the DNS record to cut over to your warm standby server.','Replace your warm standby server with a hot standby server.','Use a highly preconfigured machine image for deploying new instances.','Replace your active/active hybrid production environment (on-premises and GCP) with a warm standby server.'],
	answer:3
},
{
	q:'Which of the following is not an IAM best practice?',
    options:['Use primitive roles by default','Treat each component of your application as a separate trust boundary','Grant roles at the smallest scope needed','Restrict who has access to create and manage service accounts in your project'],
	answer:0
},
{
	q:'Which type of account would you use in code when you want to interact with Google Cloud services?',
	options:['Google group','Service account','Code account','Google account'],
	answer:1
},
{
	q:'Which of the following features makes applying firewall settings easier?',
	options:['Service accounts','Tags','Metadata','Labels'],
	answer:1
},
{
	q:'What option does Cloud SQL offer to help with high availability?',
	options:['Point-in-time recovery','The AlwaysOn setting','Snapshots','Failover replicas'],
	answer:3
}
]