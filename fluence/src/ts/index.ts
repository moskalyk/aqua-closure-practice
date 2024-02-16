
import {registerGreeter} from './main.js'
import {Fluence} from '@fluencelabs/js-client'

;(async () => {
    
    const privateKeyArray = process.env.privkey!.split(',').map(Number).concat([
        138, 58, 155, 206, 90, 147, 127, 163,
        119, 66, 142, 188, 149, 35, 56, 48
    ]);

    const keyPair: any = {
        type: 'Ed25519',
        source: new Uint8Array(privateKeyArray)
    };

    try {
        await Fluence.connect('/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWCNyMYM5vHYRYn2Rmkp1CRWGnmHvyNxrQuH2RRWjJ3jYJ', {
            debug: { printParticleId: true },
            keyPair: keyPair
        });
    } catch (error) {
        console.error("Error connecting to Fluence network:", error);
    }

    console.log(await Fluence.getClient().getPeerId())

    registerGreeter({
        say_hello: (name: string) => {
            console.log(name)
            return 'winning'
        },
        capitals: (name: string) => {
            return name.toUpperCase()
        },
        semi: (name: string) => {
            return name + ';'
        }
    })
})()