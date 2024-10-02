import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbCircleLetterHFilled } from "react-icons/tb";
const theme = {
    background: 'bg-white',
    text: 'text-darkGreen',
    heading: 'text-white',
    paragraph: 'text-darkGreen',
};
const Timeline = () => {
    return (
        <div className='bg-dark py-8 mb-0'>
            <h2 className={`text-4xl text-center mb-16 mt-8 font-bold ${theme.heading}`}>Our History</h2>            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Indrapuram</h3>
                    <h4 className="vertical-timeline-element-subtitle">Delhi NCR</h4>
                    <p>
                    Founded with a vision to revolutionize asset management.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: '#131528', color: '#fff' }}
                    icon={<TbCircleLetterHFilled />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Timeline