
export type planType = {
    name: string,
    price: number | string,
    features: string[]
}

export const plans = [
    {
        name: 'Basic',
        price: 4,
        features: [
            '$4/month/user ',
            'Up to 10 graphs',
            'Up to 500 chatbot queries'
        ]
    },
    {
        name: 'Pro',
        price: 8,
        features: [
            '$8/month/user',
            'Up to 50 graphs',
            'Up to 1000 chatbot queries',
            'Email + live chat support'
        ]
    },
    {
        name: 'Enterprise',
        price: "Contact for price",
        features: [
            'Unlimited graphs',
            'Ability to upload custom PDFs',
            '24/7 phone + email support'
        ]
    }
]