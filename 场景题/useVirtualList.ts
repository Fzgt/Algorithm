function useVirtualList<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan = 3,
) {
  const [scrollTop, setScrollTop] = useState(0);

  // 算出可见 item 的索引范围
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    startIndex + visibleCount + overscan * 2,
  );

  // 生成 visible items(带 index 和 offset)
  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    visibleItems.push({
      index: i,
      item: items[i],
      offsetTop: i * itemHeight,
    });
  }

  // 总高度撑开滚动条
  const totalHeight = items.length * itemHeight;

  // 滚动监听(节流)
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setScrollTop(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return { containerRef, totalHeight, visibleItems };
}

// 用法：
// const { containerRef, totalHeight, visibleItems } = useVirtualList(list, 80, 600);

// return (
//   <div ref={containerRef} style={{ height: 600, overflow: 'auto' }}>
//     <div style={{ height: totalHeight, position: 'relative' }}>
//       {visibleItems.map(({ index, item, offsetTop }) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             transform: `translateY(${offsetTop}px)`,
//             height: 80,
//           }}
//         >
//           {renderItem(item)}
//         </div>
//       ))}
//     </div>
//   </div>
// );
