import {
    Card,
    CardContent,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Arthur',
            text: "I've just got my rocketbook core and the feeling is great ! Write down my course notes is simplier than ever. Just a bit dispointed by a big scratch on the first cover of the book.",
        },
        {
            name: 'Noora',
            text: "I'm a very creative person, and I create tons of different characters for DnD, stories etc. This has made writing down ideas on the fly so much easier, especially since I no longer have to copy what I wrote in my notebook on my PC!",
        },
        {
            name: 'Daniel Bock',
            text: "I've been using my Rocketbook for 2.5 years now and have been thrilled so far. Unfortunately, the first pages (which were of course cleaned a bit more often than the others) can practically no longer be written on. The ink no longer holds, the text is barely legible. Even cleaning with warm water, as advised by customer service, did not bring any improvement. Thus, the book is no longer usable for me, and it is too expensive for that. Therefore, no recommendation.",
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review: Review, i: number) => (
                <Card
                    variant="outlined"
                    style={{
                        margin: '20px 0',
                        backgroundColor: 'rgb(242 255 255)',
                    }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="h6">{review.text}</Typography>
                    </CardContent>
                </Card>
            ))}

            <Card
                variant="outlined"
                style={{
                    maxWidth: 300,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <CardContent>
                    <form onSubmit={onSend}>
                        <Typography variant="h6">
                            Please leave a review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <br />
                        <TextareaAutosize
                            minRows={5}
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <Button type="submit" variant="outlined">
                                Leave review
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Reviews
