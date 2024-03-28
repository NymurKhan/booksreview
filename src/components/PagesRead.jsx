
import { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { listedBooksToWishList } from '../Root/Root';


const PagesRead = () => {

    const {listBooks} = useContext(listedBooksToWishList);
    // console.log(listBooks);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
 
    return (
        <div className="flex mt-12 items-center justify-center">
            <div className="w-[90%] h-[600px] rounded-lg bg-gray-200 flex items-center justify-center "> 
                <BarChart width={1400} height={580} data={listBooks} margin={
                    {
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }
                }>
                    <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                    <XAxis dataKey='bookName'></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {
                            listBooks.map((entry, index) => {
                                <Cell key={`cell-${index}`} fill={colors[index % 40]}></Cell>
                            })
                        }
                    </Bar>
                </BarChart>
                   
            </div>
        </div>
    );
};

export default PagesRead;