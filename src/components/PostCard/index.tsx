import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

import { IPost } from '../../@types/custom';

import style from './PostCard.module.scss';

const PostCard: React.FC<IPost> = ({
  _id,
  title,
  text,
  image,
  author,
  createdAt,
  likes,
  dislikes,
}) => {
  return (
    <div className={style.post}>
      {image && (
        <Link to={`/post/${_id}`} className={style.image}>
          <img src={`http://localhost:4444/uploads/${image}`} alt={title} />
        </Link>
      )}
      <div className={style.body}>
        <div className={style.top}>
          <Link to={`/users/${author._id}`} className={style.author}>
            {author.username}
          </Link>
          <span className={style.date}>
            {`${new Date(createdAt).toLocaleDateString()} ${new Date(
              createdAt
            ).toLocaleTimeString()}`}
          </span>
        </div>
        <h4 className={style.heading}>{title}</h4>
        <p className={style.text}>
          {image ? text.slice(0, 150) : text.slice(0, 500)}
        </p>
        <div className={style.bottom}>
          <div className={style.ratingButtons}>
            <button className={style.button}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M3.73333 5.86669L3.2832 5.58082L3.2 5.71095V5.86669H3.73333ZM6.6112 1.34402L7.06027 1.63202L6.6112 1.34402ZM9.456 2.95469L8.97813 2.71682L9.456 2.95575V2.95469ZM8 5.86669L7.5232 5.62775C7.48246 5.70907 7.46318 5.79945 7.46721 5.8903C7.47124 5.98116 7.49843 6.06948 7.54621 6.14687C7.59399 6.22426 7.66076 6.28814 7.74019 6.33245C7.81961 6.37676 7.90905 6.40002 8 6.40002V5.86669ZM15.4667 11.2L15.8933 11.52L16 11.3782V11.2H15.4667ZM12.9067 14.6134L13.3333 14.9334L12.9067 14.6134ZM8.83413 0.820288L9.10827 0.362688L8.83413 0.821354V0.820288ZM0 5.33335V16H1.06667V5.33335H0ZM4.18347 6.15255L7.06027 1.63202L6.16107 1.05815L3.2832 5.58082L4.18347 6.15255ZM8.97813 2.71789L7.5232 5.62669L8.4768 6.10455L9.9328 3.19255L8.97813 2.71575V2.71789ZM8 6.40002H13.3333V5.33335H8V6.40002ZM14.9333 8.00002V11.2H16V8.00002H14.9333ZM15.04 10.88L12.48 14.2934L13.3333 14.9334L15.8933 11.52L15.04 10.88ZM11.2 14.9334H5.86667V16H11.2V14.9334ZM4.26667 13.3334V5.86669H3.2V13.3334H4.26667ZM13.3333 6.40002C13.7577 6.40002 14.1646 6.56859 14.4647 6.86865C14.7648 7.16871 14.9333 7.57567 14.9333 8.00002H16C16 7.29278 15.719 6.6145 15.219 6.1144C14.7189 5.61431 14.0406 5.33335 13.3333 5.33335V6.40002ZM5.86667 14.9334C5.44232 14.9334 5.03535 14.7648 4.7353 14.4647C4.43524 14.1647 4.26667 13.7577 4.26667 13.3334H3.2C3.2 14.0406 3.48095 14.7189 3.98105 15.219C4.48115 15.7191 5.15942 16 5.86667 16V14.9334ZM8.55893 1.27789C9.05387 1.57442 9.23627 2.20162 8.97813 2.71789L9.9328 3.19362C10.1773 2.70467 10.2282 2.14143 10.0753 1.61656C9.92246 1.09169 9.57708 0.643883 9.10827 0.362688L8.55893 1.27789ZM12.48 14.2934C12.331 14.4921 12.1377 14.6534 11.9155 14.7644C11.6934 14.8755 11.4484 14.9334 11.2 14.9334V16C11.614 16 12.0223 15.9036 12.3926 15.7185C12.7629 15.5334 13.0849 15.2645 13.3333 14.9334L12.48 14.2934ZM7.06133 1.63202C7.38133 1.12642 8.04693 0.970688 8.55893 1.27789L9.10933 0.362688C8.62436 0.0715439 8.04487 -0.018687 7.49434 0.111224C6.94381 0.241136 6.46578 0.580916 6.16213 1.05815L7.06133 1.63095V1.63202Z"
                    fill="#727C85"
                  />
                </g>
              </svg>
              {likes.size}
            </button>
            <button className={style.button}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M3.5 10H3V10.146L3.078 10.268L3.5 10ZM6.198 14.24L6.619 13.97L6.198 14.24ZM8.865 12.73L8.417 12.953L8.865 12.729V12.73ZM7.5 10V9.5C7.41474 9.5 7.33089 9.52181 7.25643 9.56335C7.18197 9.60489 7.11936 9.66478 7.07457 9.73733C7.02978 9.80988 7.00428 9.89268 7.00051 9.97786C6.99673 10.063 7.0148 10.1478 7.053 10.224L7.5 10ZM14.5 5H15V4.833L14.9 4.7L14.5 5ZM12.1 1.8L12.5 1.5L12.1 1.8ZM8.282 14.731L8.539 15.16L8.282 14.731ZM1 10.5V0.5H0V10.5H1ZM3.078 10.268L5.776 14.508L6.619 13.971L3.922 9.731L3.078 10.268ZM9.312 12.505L7.947 9.776L7.053 10.224L8.417 12.953L9.312 12.506V12.505ZM7.5 10.5H12.5V9.5H7.5V10.5ZM15 8V5H14V8H15ZM14.9 4.7L12.5 1.5L11.7 2.1L14.1 5.3L14.9 4.7ZM10.5 0.5H5.5V1.5H10.5V0.5ZM3 3V10H4V3H3ZM12.5 10.5C13.163 10.5 13.7989 10.2366 14.2678 9.76777C14.7366 9.29893 15 8.66304 15 8H14C14 8.39782 13.842 8.77936 13.5607 9.06066C13.2794 9.34196 12.8978 9.5 12.5 9.5V10.5ZM5.5 0.5C4.83696 0.5 4.20107 0.763392 3.73223 1.23223C3.26339 1.70107 3 2.33696 3 3H4C4 2.60218 4.15804 2.22064 4.43934 1.93934C4.72064 1.65804 5.10218 1.5 5.5 1.5V0.5ZM8.539 15.16C8.97877 14.8964 9.30274 14.4764 9.44607 13.9841C9.5894 13.4918 9.54152 12.9635 9.312 12.505L8.417 12.953C8.659 13.436 8.487 14.024 8.024 14.303L8.539 15.16ZM12.5 1.5C12.2671 1.18951 11.9652 0.937501 11.618 0.763932C11.2709 0.590363 10.8881 0.5 10.5 0.5V1.5C10.7329 1.5 10.9625 1.55422 11.1708 1.65836C11.3791 1.7625 11.5603 1.91371 11.7 2.1L12.5 1.5ZM5.776 14.508C6.06067 14.9554 6.50882 15.274 7.02494 15.3957C7.54106 15.5175 8.08434 15.4329 8.539 15.16L8.024 14.302C7.79289 14.4409 7.51665 14.4841 7.25419 14.4222C6.99172 14.3604 6.76379 14.1985 6.619 13.971L5.776 14.508Z"
                    fill="#727C85"
                  />
                </g>
              </svg>
              {dislikes.size}
            </button>
          </div>
          <div className={style.actionButtons}>
            <IconButton variant="outlined">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M8 14.4L7.6224 14.7776C7.67194 14.8273 7.7308 14.8667 7.79559 14.8935C7.86039 14.9204 7.92985 14.9343 8 14.9343C8.07015 14.9343 8.13962 14.9204 8.20441 14.8935C8.2692 14.8667 8.32806 14.8273 8.3776 14.7776L8 14.4ZM1.6384 8.03838L1.2608 8.41492L1.6384 8.03838ZM6.97173 2.70505L6.59413 3.08158L6.97173 2.70505ZM8 3.73332L7.6224 4.11092C7.67194 4.16058 7.7308 4.19999 7.79559 4.22688C7.86039 4.25376 7.92985 4.2676 8 4.2676C8.07015 4.2676 8.13962 4.25376 8.20441 4.22688C8.2692 4.19999 8.32806 4.16058 8.3776 4.11092L8 3.73332ZM9.02827 2.70505L8.65173 2.32745L9.02827 2.70505ZM8.3776 14.0224L2.01493 7.66078L1.2608 8.41492L7.6224 14.7776L8.3776 14.0224ZM13.9851 7.66078L7.6224 14.0224L8.3776 14.7776L14.7392 8.41492L13.9851 7.66078ZM6.59413 3.08158L7.6224 4.11092L8.3776 3.35572L7.34827 2.32745L6.59413 3.08158ZM8.3776 4.11092L9.40587 3.08158L8.65173 2.32745L7.6224 3.35572L8.3776 4.11092ZM11.6949 1.06665C10.5536 1.06665 9.4592 1.51998 8.65173 2.32745L9.40587 3.08158C10.0131 2.47466 10.8364 2.13359 11.6949 2.13332V1.06665ZM14.9333 5.37172C14.9333 6.23038 14.592 7.05385 13.984 7.66078L14.7392 8.41492C15.5463 7.60777 15.9998 6.51315 16 5.37172H14.9333ZM16 5.37172C16 4.22994 15.5464 3.13493 14.7391 2.32758C13.9317 1.52022 12.8367 1.06665 11.6949 1.06665V2.13332C12.5538 2.13332 13.3775 2.4745 13.9848 3.08182C14.5921 3.68914 14.9333 4.51284 14.9333 5.37172H16ZM4.30507 2.13332C5.16373 2.13332 5.9872 2.47465 6.59413 3.08265L7.34827 2.32745C6.54112 1.52037 5.4465 1.06687 4.30507 1.06665V2.13332ZM1.06667 5.37172C1.06667 4.51284 1.40785 3.68914 2.01517 3.08182C2.62249 2.4745 3.44619 2.13332 4.30507 2.13332V1.06665C3.16329 1.06665 2.06828 1.52022 1.26092 2.32758C0.453568 3.13493 0 4.22994 0 5.37172H1.06667ZM2.016 7.66078C1.71519 7.36027 1.47652 7.00344 1.31363 6.61068C1.15075 6.21792 1.06683 5.79692 1.06667 5.37172H0C0 6.51305 0.453333 7.60745 1.2608 8.41492L2.01493 7.66078H2.016Z"
                    fill="#206FF3"
                  />
                </g>
              </svg>
            </IconButton>
            <Button size="small" href={`/post/${_id}`}>
              Читать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
