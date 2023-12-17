export default function BlogPost({params}){

    const blogId = params.blogId

    return <main>
        <h1>This is blog Number {blogId}</h1>
    </main>
}