import create from "zustand"; // create로 zustand를 불러옵니다.
import axios from "axios";

const useStore = create((set) => ({

  questionData: [
    {
      member: {
        nickname: "1쿠조",
        memberId: 1,
      },
      id: 1,
      title: "제목 입니다1제목 입니다1제목 입니다1제목 입니다1",
      content:
        "내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1",
      tags: ["#third", "#java", "#spring", "#like"],
      recommendCount: 1,
      hits: 1,
      baseTime: {
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
      },
      selection: true,
      commentCount: 1,
    },
    {
      member: {
        nickname: "2쿠조",
        memberId: 2,
      },
      id: 2,
      title:
        "제목 입다1제목 입니1니다222222222222222222목 입니다1제목 입니다1제목 입니다1제목 입니다1제목 입니다1니다1",
      content:
        "내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1",
      tags: ["#third", "#java", "#spring", "#like"],
      recommendCount: 1,
      hits: 1,
      baseTime: {
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
      },
      selection: true,
      commentCount: 1,
    },
    {
      member: {
        nickname: "3쿠조",
        memberId: 3,
      },
      id: 3,
      title:
        "제목 33333입333333다1제목 입니1니33333333333입니다1제목 입니다1제목 입니다1제목 입니다1제목 입니다1니다1",
      content:
        "내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1내용 입니다1",
      tags: ["#third", "#java", "#spring", "#hi"],
      recommendCount: 1,
      hits: 1,
      baseTime: {
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
      },
      selection: true,
      commentCount: 1,
    },
  ],

  pageInfo: {
    page: 1,
    size: 10,
    totalElements: 300,
    totalPages: 30,
  },

  answerData: {
    data: [
      {
        id: 1,
        content: "블라블라블라1",
        recommendCount: 0,
        selection: false,
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
        member: {
          id: 1,
          nickName: "김회원",
        },
      },
      {
        id: 2,
        content: "블라라2",
        recommendCount: 0,
        selection: false,
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
        member: {
          id: 1,
          nickName: "김회원",
        },
      },
      {
        id: 3,
        content: "블라블라3",
        recommendCount: 0,
        selection: false,
        createdAt: "2022-12-24T14:26:59.7627641",
        lastModifiedAt: "2022-12-24T14:26:59.7627641",
        member: {
          id: 1,
          nickName: "김회원",
        },
      },
    ],
    size: 3,
  },
  // async getInitialQuestions(url) {
  //   const response = await axios.get(url, {
  //     headers: {
  //       "ngrok-skip-browser-warning": "skip", //ngrok오류로 인해 넣어준 헤더
  //     },
  //   });
  //   return response.data;
  // },
  createQuestion: (question) => {
    console.log("들어옴? :" + question);
    set((state) => ({ questionData: state.questionData.push(question) }));
  },
  // async getInitialMembers() {
  //   const response = await axios.get("/members/1");
  //   return response.data;
  // },
  // increasePopulation: () => set((state) => console.log(state)),
  // removeAllBears: () => set(),
}));

export default useStore;
