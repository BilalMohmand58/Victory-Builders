

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email } = req.body;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required.' });
//         }

//         try {
//             const response = await fetch('https://a.klaviyo.com/api/v2/list/RRjK2k/subscribe', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     api_key: 'R6tVP6',
//                     profiles: [{ email }],
//                 }),
//             });

//             if (response.ok) {
//                 return res.status(200).json({ message: 'Subscription successful!' });
//             } else {
//                 const errorData = await response.json();
//                 return res.status(response.status).json({ message: errorData.detail || 'An error occurred.' });
//             }
//         } catch (error) {
//             return res.status(500).json({ message: 'Server error. Please try again later.' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).json({ message: `Method ${req.method} not allowed` });
//     }
// }


