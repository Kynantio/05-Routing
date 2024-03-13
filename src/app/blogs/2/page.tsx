type Props = {
      params: {
            blogs2: string
      }
    }
    
    export default function SecondBlog({ params }: Props) {
      return (
            <h1>Second Blog {params.blogs2}</h1>
      )
    }