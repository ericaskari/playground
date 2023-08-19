const { Partitioners } = require("kafkajs");

async function main() {
    const { getKafka, getHostname, getContainerName, TOPIC } = require('./shared');
    const kafka = getKafka();

    const containerName = await getContainerName();

    await kafka.admin().createTopics({
        topics: [
            {
                topic: 'ANOTHER_TEST',
                numPartitions: 4
            }
        ]
    })


    const MyPartitioner = () => {
        return ({ topic, partitionMetadata, message }) => {
            // select a partition based on some logic
            // return the partition number
            const partition = Math.min(4, Math.trunc(Math.random() * 10));
            console.log(`[Partitioner] ---> [partition: ${ partition }][containerName: ${ containerName }][message: ${JSON.stringify(message)}]`);
            return partition;
        }
    }

    const producer = kafka.producer({
        createPartitioner: Partitioners.DefaultPartitioner,
        allowAutoTopicCreation: true,
        idempotent: true
    })

    await producer.connect()
    var id = 0;
    setInterval(async () => {

        const message = `[${containerName}] Message with ID: ${ id }`;
        await producer.send({
            topic: TOPIC,
            messages: [
                { value: message, timestamp: Date.now().toString() },
            ],
        });
        console.log(`------------------------------------ [MSG_SENT][containerName: ${containerName}][message: ${message}]`)
        id = id + 1;
    }, 10000)

    // await producer.disconnect()

}

main().then()

