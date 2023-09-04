import { Course } from '@/shared/types/course'
import { Book, BookmarkIcon, Clock10Icon } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import courseImage from '@//assets/java_coder.png'


const CourseCard: React.FC<Course> = (course) => {

    const router = useRouter()
    const pathname = usePathname()

    return (
        <li className="flex gap-2 w-full lg:max-w-[45%] cursor-pointer hover:bg-gray-50 border border-gray-100 rounded-lg p-2" onClick={() => router.push(pathname + "/" + course.id)}>
            <div className='w-[30%] shrink-0 bg-gray-100 h-full relative'>
                {/* <Image src={course.courseListingImageUrl} alt="course image" className='object-cover' fill /> */}
                <Image src={courseImage} alt="course image" className='object-cover' fill />
            </div>
            <div className='flex flex-col gap-2 grow'>
                <div className='flex justify-between p-2 border-b border-gray-100'>
                    <p>{course.courseTitle}</p>
                    <BookmarkIcon />
                </div>
                <ul className='flex flex-col gap-1 text-gray-500 text-xs'>
                    <li>
                        {course.courseDescription}
                    </li>
                    {/* <li>
                        Server-Side Framework Mastery
                    </li>
                    <li>
                        RESTful API Creation
                    </li>
                    <li>
                        Database Integration Proficiency
                    </li>
                    <li>
                        Deployment and Scalability
                    </li> */}
                </ul>
                <div className='flex gap-8 mt-6 text-xs'>
                    <p className="flex items-center gap-1"><Book className='text-primary h-4' /> 12 Lessons</p>
                    <p className="flex items-center gap-1"><Clock10Icon className='text-primary h-4' /> 40 hrs 45 mins</p>
                </div>

            </div>
        </li>
    )
}

export default CourseCard