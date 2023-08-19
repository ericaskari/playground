const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000)
    })
}
async function main() {
    const { getKafka, getHostname, getContainerName, TOPIC } = require('./shared');
    const kafka = getKafka();
    const containerName = await getContainerName();
    const consumer = kafka.consumer({ groupId: 'MAIN_GROUP'  })

    await consumer.connect()
    await consumer.subscribe({ topic: TOPIC, fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`[${containerName}] Message received: partition: ${partition} | topic: ${topic}: ${message.value.toString()}`);
            await wait(1);
        },
    })
}

main().then()

