import BookLists from "./components/BookLists"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NoBook from "./components/NoBook"
import data from "./data/data"
import { useState } from "react"

function App() {
	const [books, setBooks] = useState(data)

	const handleFavorite = (id) => {
		const newBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, isFavorite: !book.isFavorite }
			}
			return book
		})
		setBooks(newBooks)
	}

	const handleBookSearch = (query) => {
		const newBooks = data.filter((book) =>
			book.title.toLowerCase().includes(query.toLowerCase())
		)
		setBooks(newBooks)
	}

	const handleBookShort = (short) => {
		// Sort by title ascending
		if (short === "title_asc") {
			const newBooks = [...books].sort((a, b) =>
				a.title.localeCompare(b.title)
			)
			setBooks(newBooks)
		} else if (short === "title_desc") {
			// Sort by title descending
			const newBooks = [...books].sort((a, b) =>
				b.title.localeCompare(a.title)
			)
			setBooks(newBooks)
		} else if (short === "rating") {
			// Sort by rating
			const newBooks = [...books].sort((a, b) => b.rating - a.rating)
			setBooks(newBooks)
		} else if (short === "year_asc") {
			// Sort by year ascending
			const newBooks = [...books].sort((a, b) => a.year - b.year)
			setBooks(newBooks)
		} else if (short === "year_desc") {
			// Sort by year descending
			const newBooks = [...books].sort((a, b) => b.year - a.year)
			setBooks(newBooks)
		}
	}

	return (
		<>
			<Navbar />
			<main className="my-10 lg:my-14">
				<Header
					onSearch={handleBookSearch}
					onBookShort={handleBookShort}
				/>

				{books.length === 0 ? <NoBook /> : <BookLists books={books} />}
			</main>
			<Footer />
		</>
	)
}

export default App
