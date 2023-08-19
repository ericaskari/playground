const { Kafka } = require('kafkajs')

const {Docker} = require('node-docker-api');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

const TOPIC = "ANOTHER_TEST"

async function getContainerName(hostname = getHostname()) {
    try {
        const containers = await docker.container.list();
        // Inspect
        const formatted = containers.map(container => {
            return {
                name: container.data.Names[0],
                hostname: container.data.Id.slice(0, 12)
            }

        });
        console.log(formatted[0])
        return formatted.find(x => x.hostname === hostname)?.name.split('/').join('') ?? getHostname();
    }catch (e) {
        console.log(e)
        return getHostname();
    }
}

function getHostname() {
    var os = require('os');
    return  os.hostname();
}
 function getKafka() {
    const kafkaHost = process.env.KAFKA_HOST ?? 'localhost';
    const broker = `${kafkaHost}:9092`
    const kafka = new Kafka({
        clientId: getHostname(),
        brokers: [broker],
    })
    console.log("Broker: ", broker, " Hostname: ", getHostname());
    return kafka;

}

module.exports = {
    TOPIC,
    getKafka,
    getHostname,
    getContainerName
}
