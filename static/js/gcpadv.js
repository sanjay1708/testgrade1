const quiz=[
{
	q:'You are a project owner and need your co-worker to deploy a new version of your application to App Engine. You want to follow Google’s recommended practices. Which IAM roles should you grant your co-worker?',
	options:['Project Editor','App Engine Service Admin','App Engine Deployer','App Engine Code Viewer'],
	answer:2
},
{
	q:'Your company has reserved a monthly budget for your project. You want to be informed automatically of your project spend so that you can take action when you approach the limit. What should you do?',
	options:['Link a credit card with a monthly limit equal to your budget.','Create a budget alert for 50%, 90%, and 100% of your total monthly budget.','In App Engine Settings, set a daily budget at the rate of 1/30 of your monthly budget.','In the GCP Console, configure billing export to BigQuery. Create a saved view that queries your total spend.'],
	answer:1
},
{
	q:'You have a project using BigQuery. You want to list all BigQuery jobs for that project. You want to set this project as the default for the bq command-line tool. What should you do?',
	options:['Use “gcloud config set project” to set the default project.','Use “bq config set project” to set the default project.','Use “gcloud generate config-url” to generate a URL to the Google Cloud Platform Console to set the default project.','Use “bq generate config-url” to generate a URL to the Google Cloud Platform Console to set the default project.'],
	answer:0
},
{
	q:'Your project has all its Compute Engine resources in the europe-west1 region. You want to set europe-west1 as the default region for gcloud commands. What should you do?',
	options:['Use Cloud Shell instead of the command line interface of your device. Launch Cloud Shell after you navigate to a resource in the europe-west1 region. The europe-west1 region will automatically become the default region.','Use “gcloud config set compute/region europe-west1” to set the default region for future gcloud commands.','Use “gcloud config set compute/zone europe-west1” to set the default region for future gcloud commands.'],
	answer:1
},
{
	q:'You developed a new application for App Engine and are ready to deploy it to production. You need to estimate the costs of running your application on Google Cloud Platform as accurately as possible. What should you do?',
	options:['Create a YAML file with the expected usage. Pass this file to the “gcloud app estimate” command to get an accurate estimation.','Multiply the costs of your application when it was in development by the number of expected users to get an accurate estimation.','Use the pricing calculator for App Engine to get an accurate estimation of the expected charges.','Create a ticket with Google Cloud Billing Support to get an accurate estimation.'],
	answer:2
},
{
	q:'Your company processes high volumes of IoT data that are time-stamped. The total data volume can be several petabytes. The data needs to be written and changed at a high speed. You want to use the most performant storage option for your data. Which product should you use?',
	options:['Cloud Datastore','Cloud Storage','Cloud Bigtable','BigQuery'],
	answer:2
},
{
	q:'Your application has a large international audience and runs stateless virtual machines within a managed instance group across multiple locations. One feature of the application lets users upload files and share them with other users. Files must be available for 30 days; after that, they are removed from the system entirely. Which storage solution should you choose?',
	options:['A Cloud Datastore database.','A multi-regional Cloud Storage bucket.','Persistent SSD on virtual machine instances.','A managed instance group of Filestore servers.'],
	answer:1
},
{
	q:'You need to create a new Kubernetes Cluster on Google Cloud Platform that can autoscale the number of worker nodes. What should you do?',
	options:['Create a cluster on Kubernetes Engine and enable autoscaling on Kubernetes Engine.','Create a cluster on Kubernetes Engine and enable autoscaling on the instance group of the cluster.','Configure a Compute Engine instance as a worker and add it to an unmanaged instance group. Add a load balancer to the instance group and rely on the load balancer to create additional Compute Engine instances when needed.','Create Compute Engine instances for the workers and the master, and install Kubernetes. Rely on Kubernetes to create additional Compute Engine instances when needed.'],
	answer:0
},
{
	q:'You have an application server running on Compute Engine in the europe-west1-d zone. You need to ensure high availability and replicate the server to the europe-west2-c zone using the fewest steps possible. What should you do?',
	options:['Create a snapshot from the disk. Create a disk from the snapshot in the europe-west2-c zone. Create a new VM with that disk.','Create a snapshot from the disk. Create a disk from the snapshot in the europe-west1-d zone and then move the disk to europe-west2-c. Create a new VM with that disk.','Use “gcloud” to copy the disk to the europe-west2-c zone. Create a new VM with that disk.','Use “gcloud compute instances move” with parameter “–destination-zone europe-west2-c” to move the instance to the new zone.'],
	answer:0
},
{
	q:'Your company has a mission-critical application that serves users globally. You need to select a transactional, relational data storage system for this application. Which two products should you consider',
	options:['BigQuery','Cloud SQL','Cloud Spanner','Cloud Bigtable'],
	answer:1
},
{
	q:'You have a Kubernetes cluster with 1 node-pool. The cluster receives a lot of traffic and needs to grow. You decide to add a node. What should you do?',
	options:['Use “gcloud container clusters resize” with the desired number of nodes.','Use “kubectl container clusters resize” with the desired number of nodes.','Edit the managed instance group of the cluster and increase the number of VMs by 1.','Edit the managed instance group of the cluster and enable autoscaling.'],
	answer:0
},
{
	q:'You created an update for your application on App Engine. You want to deploy the update without impacting your users. You want to be able to roll back as quickly as possible if it fails. What should you do?',
    options:['Delete the current version of your application. Deploy the update using the same version identifier as the deleted version.','Notify your users of an upcoming maintenance window. Deploy the update in that maintenance window.','Deploy the update as the same version that is currently running.','Deploy the update as a new version. Migrate traffic from the current version to the new version.'],
	answer:3
},
{
	q:'You need to estimate the annual cost of running a Bigquery query that is scheduled to run nightly. What should you do?',
	options:['Use “gcloud query –dry_run” to determine the number of bytes read by the query. Use this number in the Pricing Calculator.','Use “bq query –dry_run” to determine the number of bytes read by the query. Use this number in the Pricing Calculator.','Use “gcloud estimate” to determine the amount billed for a single query. Multiply this amount by 365.'],
	answer:1
},
{
	q:'Which of these options is not a valid Cloud Storage class?',
	options:['Glacier Storage','Nearline Storage','Coldline Storage'],
	answer:0
},
{
	q:'Which of the following gcloud command lets you view the details of a custom subnet you created in a particular region?',
	options:['gcloud compute networks subnets view [SUBNET_NAME] –region us-central1','gcloud compute networks subnets list [SUBNET_NAME] –region us-central1','gcloud compute networks subnets describe [SUBNET_NAME] –region us-central1','gcloud compute networks subnets read [SUBNET_NAME] –region us-central1'],
	answer:2
}
]